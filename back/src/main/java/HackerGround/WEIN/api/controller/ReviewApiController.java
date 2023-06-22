package HackerGround.WEIN.api.controller;

import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.domain.comment.Review;
import HackerGround.WEIN.domain.member.Member;
import HackerGround.WEIN.dto.review.ReviewDeleteRequest;
import HackerGround.WEIN.dto.review.ReviewModifyRequest;
import HackerGround.WEIN.dto.review.ReviewRequest;
import HackerGround.WEIN.dto.review.ReviewResponse;
import HackerGround.WEIN.model.response.CommonResult;
import HackerGround.WEIN.model.response.ListResult;
import HackerGround.WEIN.model.response.SingleResult;
import HackerGround.WEIN.service.BoardService;
import HackerGround.WEIN.service.MemberService;
import HackerGround.WEIN.service.ResponseService;
import HackerGround.WEIN.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class ReviewApiController {

    private final BoardService boardService;
    private final MemberService memberService;
    private final ReviewService reviewService;
    private final ResponseService responseService;

    //단건 조회
    @GetMapping("/review/{id}")
    public SingleResult<ReviewResponse> getOneReview(@PathVariable Long id) throws Exception {
        Review review = reviewService.findById(id).get();
        ReviewResponse reviewResponse = ReviewResponse.toDto(review);
        return responseService.getSingleResult(reviewResponse);
    }

    //전체 조회
    @GetMapping("/review")
    public ListResult<ReviewResponse> getReviews() {
        List<Review> all = reviewService.findAll();
        List<ReviewResponse> reviewList = all.stream().map(ReviewResponse::toDto).collect(Collectors.toList());
        return responseService.getListResult(reviewList);
    }

    //리뷰 등록
    @PostMapping("/review/create")
    public CommonResult save(@Validated @RequestBody ReviewRequest request, BindingResult bindingResult) {
        if(bindingResult.hasErrors()) {
            return responseService.getFailResult();
        }

        reviewService.save(request);
        return responseService.getSuccessResult();
    }

    //리뷰 수정
    @PutMapping("/review/{id}")
    public CommonResult modify(@PathVariable("id") Long id, @Validated @RequestBody ReviewModifyRequest request, BindingResult bindingResult) throws Exception {
        if(bindingResult.hasErrors()) {
            return responseService.getFailResult();
        }

        Review review = reviewService.findById(id).get();
        Member member = memberService.findByToken(request.getToken());
        Board board = boardService.findById(request.getBoardId());

        if(!review.getMember().equals(member) || !review.getBoard().equals(board)) {
            return responseService.getFailResult();
        }

        review.update(request);
        return responseService.getSuccessResult();
    }

    //리뷰 삭제
    @DeleteMapping("/review/{id}")
    public CommonResult delete(@PathVariable("id") Long id, @Validated ReviewDeleteRequest request, BindingResult bindingResult) throws Exception {
        if(bindingResult.hasErrors()) {
            return responseService.getFailResult();
        }

        reviewService.delete(id, request);
        return responseService.getSuccessResult();
    }

}
