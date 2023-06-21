package HackerGround.WEIN.api.controller;

import HackerGround.WEIN.domain.member.Member;
import HackerGround.WEIN.dto.board.BoardRequest;
import HackerGround.WEIN.dto.member.MemberRequest;
import HackerGround.WEIN.dto.member.MemberResponse;
import HackerGround.WEIN.model.response.CommonResult;
import HackerGround.WEIN.model.response.SingleResult;
import HackerGround.WEIN.service.BoardService;
import HackerGround.WEIN.service.MemberService;
import HackerGround.WEIN.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class BoardApiController {

    private final BoardService boardService;
    private final ResponseService responseService;

    @PostMapping("/board/create")
    public CommonResult save(@Validated @RequestBody BoardRequest request, BindingResult bindingResult) {
        if(bindingResult.hasErrors()) {
            return responseService.getFailResult();
        }

        boardService.register(request);
        return responseService.getSuccessResult();
    }


}
