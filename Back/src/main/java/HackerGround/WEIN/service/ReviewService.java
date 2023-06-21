package HackerGround.WEIN.service;

import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.domain.comment.Review;
import HackerGround.WEIN.domain.member.Member;
import HackerGround.WEIN.repository.BoardRepository;
import HackerGround.WEIN.repository.MemberRepository;
import HackerGround.WEIN.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;


    //생성, 수정, 삭제, 아이디로 찾고, 전체 찾기 , 연관관계 매핑

    public Optional<Review> findById(Long id) {
        return reviewRepository.findById(id);
    }

    public List<Review> findAll() {
        return reviewRepository.findAll();
    }

    public Review save(Review review, Long boardId, Long memberId) {
        Board board = boardRepository.findById(boardId).get();
        Member member = memberRepository.findById(memberId).get();
        review.setBoard(board);
        review.setMember(member);
        reviewRepository.save(review);
        return review;
    }

    public Review update(Long reviewId, Review newReview) {
        Review review = findById(reviewId).get();
        return review.update(newReview);
    }

    public void delete(Review review) {
        reviewRepository.delete(review);
    }
}
