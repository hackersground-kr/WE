package HackerGround.WEIN.api.controller;


import HackerGround.WEIN.domain.member.Member;
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

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class UserApiController {

    private final MemberService memberService;
    private final ResponseService responseService;

    @GetMapping("/user/{token}")
    public SingleResult<MemberResponse> findUserByToken(@PathVariable String token) {
        Member member = memberService.findByToken(token);
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
}
