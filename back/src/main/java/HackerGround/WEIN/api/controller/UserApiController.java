package HackerGround.WEIN.api.controller;


import HackerGround.WEIN.domain.member.Member;
import HackerGround.WEIN.dto.member.MemberDeleteRequest;
import HackerGround.WEIN.dto.member.MemberModifyRequest;
import HackerGround.WEIN.dto.member.MemberRequest;
import HackerGround.WEIN.dto.member.MemberResponse;
import HackerGround.WEIN.model.response.CommonResult;
import HackerGround.WEIN.model.response.ListResult;
import HackerGround.WEIN.model.response.SingleResult;
import HackerGround.WEIN.service.MemberService;
import HackerGround.WEIN.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/api")
public class UserApiController {

    private final MemberService memberService;
    private final ResponseService responseService;

    /**
     *
     * 유저 검색
     */
    @GetMapping("/member/{token}")
    public SingleResult<MemberResponse> findUserByToken(@PathVariable String token) {
        Member member = memberService.findByToken(token);
        MemberResponse memberResponse = MemberResponse.toDto(member);
        return responseService.getSingleResult(memberResponse);
    }

    /**
     *
     * 유저 전체 검색
     */
    @GetMapping("/member")
    public ListResult<MemberResponse> findAllUsers() {
        List<Member> members = memberService.findAll();
        List<MemberResponse> memberResponseList=members.stream().map(MemberResponse::toDto).collect(Collectors.toList());
        return responseService.getListResult(memberResponseList);
    }

    /**
     *
     * 유저 등록
     */
    @PostMapping("/member")
    public CommonResult save(@Validated @RequestBody MemberRequest request, BindingResult bindingResult) {
        if(bindingResult.hasErrors()) {
            return responseService.getFailResult();
        }

        memberService.save(request);
        return responseService.getSuccessResult();
    }

    /**
     *
     *
     * 유저 삭제
     */
    @DeleteMapping("/member")
    public CommonResult delete(@Validated @RequestBody MemberDeleteRequest request,BindingResult bindingResult) {

        if(bindingResult.hasErrors()) {
            return responseService.getFailResult();
        }
        Member member = memberService.findByToken(request.getToken());
        memberService.delete(member);
        return responseService.getSuccessResult();
    }

    /**
     *
     * 유저 프로필 수정
     */
    @PutMapping("/member")
    public CommonResult modify(@RequestBody MemberModifyRequest memberModifyRequest,
                               BindingResult bindingResult) {

        if(bindingResult.hasErrors()) {
            return responseService.getFailResult();
        }
        memberService.update(memberModifyRequest);
        return responseService.getSuccessResult();
    }
}
