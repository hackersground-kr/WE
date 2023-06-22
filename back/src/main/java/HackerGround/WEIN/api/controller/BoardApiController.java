package HackerGround.WEIN.api.controller;

import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.domain.comment.Review;
import HackerGround.WEIN.domain.member.Member;
import HackerGround.WEIN.dto.board.*;
import HackerGround.WEIN.dto.heart.HeartRequest;
import HackerGround.WEIN.dto.member.MemberRequest;
import HackerGround.WEIN.dto.member.MemberResponse;
import HackerGround.WEIN.dto.review.ReviewResponse;
import HackerGround.WEIN.model.response.CommonResult;
import HackerGround.WEIN.model.response.ListResult;
import HackerGround.WEIN.model.response.SingleResult;
import HackerGround.WEIN.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class BoardApiController {

    private final MemberService memberService;
    private final BoardService boardService;

    private final ReviewService reviewService;
    private final ResponseService responseService;

    private final HeartService heartService;

    /**
     *
     * 단건 조회
     */
    @GetMapping("/board/{id}")
    public SingleResult<BoardReviewResponse> getOneBoard(@PathVariable Long id) throws Exception {
        Board board = boardService.findById(id);
        boardService.addViewCount(board);

        List<Review> reviewList = reviewService.findByBoardId(id);
        List<ReviewResponse> responseList = reviewList.stream().map(ReviewResponse::toDto).collect(Collectors.toList());

        return responseService.getSingleResult(new BoardReviewResponse(board,responseList));
    }

    /**
     *
     * 전체 조회
     */
    @GetMapping("/board")
    public ListResult<BoardResponse> getBoards() {
        List<Board> all = boardService.findAll();
        List<BoardResponse> responseList = all.stream().map(BoardResponse::toDto).collect(Collectors.toList());
        return responseService.getListResult(responseList);
    }

    /**
     *
     * 클래스 등록
     */
    @PostMapping("/board/create")
    public CommonResult save(@Validated @RequestBody BoardRequest request, BindingResult bindingResult) {
        if(bindingResult.hasErrors()) {
            return responseService.getFailResult();
        }

        boardService.register(request);
        return responseService.getSuccessResult();
    }

    /**
     *
     * 클래스 수정
     *
     */
    @PutMapping("/board/{id}")
    public CommonResult modify(@PathVariable("id") Long id,
                               @Validated @RequestBody BoardModifyRequest request,
                               BindingResult bindingResult) throws Exception {

        if(bindingResult.hasErrors()) {
            return responseService.getFailResult();
        }

        Board board = boardService.findById(id);
        Member member = memberService.findByToken(request.getToken());

        if(!board.getMember().equals(member)) {
            return responseService.getFailResult();
        }

        boardService.modify(id,request);
        return responseService.getSuccessResult();
    }

    /**
     *
     * 클래스 삭제
     */

    @DeleteMapping("/board/{id}")
    public CommonResult delete(@PathVariable("id") Long id,
                               @Validated BoardDeleteRequest request,
                               BindingResult bindingResult) throws Exception {
        if(bindingResult.hasErrors()) {
            return responseService.getFailResult();
        }

        boardService.delete(id,request);
        return responseService.getSuccessResult();
    }


    /**
     *
     * 클래스 좋아요 기능
     */
    @PostMapping("/board/{id}")
    public CommonResult like(@PathVariable("id") Long id,
                             @Validated HeartRequest request,
                             BindingResult bindingResult) throws Exception {
        if(bindingResult.hasErrors()) {
            return responseService.getFailResult();
        }

        heartService.clickHeart(id,request);
        return responseService.getSuccessResult();
    }


}
