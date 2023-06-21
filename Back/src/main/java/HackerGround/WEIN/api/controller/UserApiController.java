package HackerGround.WEIN.api.controller;


import HackerGround.WEIN.domain.member.Member;
import HackerGround.WEIN.dto.member.MemberResponse;
import HackerGround.WEIN.model.response.SingleResult;
import HackerGround.WEIN.service.MemberService;
import HackerGround.WEIN.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class UserApiController {

    private final MemberService memberService;
    private final ResponseService responseService;

    @GetMapping(value = "/user/{toekn}")
    public SingleResult<MemberResponse> findUserByToken(@PathVariable String token) {
        Member member = memberService.findByToken(token);
        MemberResponse memberResponse = MemberResponse.toDto(member);
        return responseService.getSingleResult(memberResponse);
    }
}
