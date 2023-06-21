package HackerGround.WEIN.service;

import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.domain.comment.Review;
import HackerGround.WEIN.domain.member.Member;
import HackerGround.WEIN.dto.member.MemberRequest;
import HackerGround.WEIN.dto.review.ReviewRequest;
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

    public Optional<Review> findById(Long id) throws Exception {
        return Optional.ofNullable(reviewRepository.findById(id).orElseThrow(() -> new Exception()));
    }

    public List<Review> findAll() {
        return reviewRepository.findAll();
    }

    public Review save(ReviewRequest review) {
        Board board = boardRepository.findBoardById(review.getBoardId());
        Member member = memberRepository.findMemberByToken(review.getMemberToken());

        Review reviewEntity = review.to_Entity(member,board);
        reviewRepository.save(reviewEntity);
        return reviewEntity;
    }

//    public Member save(MemberRequest memberRequest) {
//        Member member = memberRequest.to_Entity();
//        memberRepository.save(member);
//        return member;
//    }

    public Review update(Long reviewId, Review newReview) throws Exception {
        Review review = findById(reviewId).get();
        return review.update(newReview);
    }

    public void delete(Review review) {
        reviewRepository.delete(review);
    }

}
