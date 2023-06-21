package HackerGround.WEIN.api.controller;


import HackerGround.WEIN.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class UserApiController {

    private final MemberService memberService;
}
