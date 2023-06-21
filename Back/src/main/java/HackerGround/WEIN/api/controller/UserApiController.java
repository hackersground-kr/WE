package HackerGround.WEIN.api.controller;


import HackerGround.WEIN.domain.member.Member;
import HackerGround.WEIN.dto.member.MemberDeleteRequest;
import HackerGround.WEIN.dto.member.MemberRequest;
import HackerGround.WEIN.dto.member.MemberResponse;
import HackerGround.WEIN.model.response.CommonResult;
import HackerGround.WEIN.model.response.SingleResult;
import HackerGround.WEIN.service.MemberService;
import HackerGround.WEIN.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class UserApiController {

    private final MemberService memberService;
    private final ResponseService responseService;

    @GetMapping("/member/{token}")
    public SingleResult<MemberResponse> findUserByToken(@PathVariable String token) {
        Optional<Member> member = memberService.findByToken(token);
        MemberResponse memberResponse = MemberResponse.toDto(member);
        return responseService.getSingleResult(memberResponse);
    }

    @PostMapping("/member")
    public CommonResult save(@Validated @RequestBody MemberRequest request, BindingResult bindingResult) {
        if(bindingResult.hasErrors()) {
            return responseService.getFailResult();
        }

        memberService.save(request);
        return responseService.getSuccessResult();
    }

    @DeleteMapping("/member")
    public CommonResult delete(@Validated @RequestBody MemberDeleteRequest request,BindingResult bindingResult) {

        if(bindingResult.hasErrors()) {
            return responseService.getFailResult();
        }
        Optional<Member> member = memberService.findByToken(request.getToken());
        memberService.delete(member);
        return responseService.getSuccessResult();
    }
}
