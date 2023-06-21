package HackerGround.WEIN.service;

import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.domain.comment.Review;
import HackerGround.WEIN.domain.member.Member;
import HackerGround.WEIN.dto.member.MemberRequest;
import HackerGround.WEIN.dto.review.ReviewDeleteRequest;
import HackerGround.WEIN.dto.review.ReviewModifyRequest;
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

    public List<Review> findByMemberAndBoard(Member new_member, Board new_board) {
        Board board = boardRepository.findBoardById(new_board.getId());
        Member member = memberRepository.findMemberByToken(new_member.getToken());

        List<Review> reviews = reviewRepository.findReviewsByMemberAndBoard(member, board);
        return reviews;
    }

    public Review update(Long id, ReviewModifyRequest reviewModifyRequest) {
        Review reviewById = reviewRepository.findById(id).get();
        return reviewById.update(reviewModifyRequest);
    }

    public void delete(Long id, ReviewDeleteRequest request) throws Exception {
        Review review = reviewRepository.findById(id).get();
        Board board = boardRepository.findBoardById(request.getBoardId());
        Member member = memberRepository.findMemberByToken(request.getToken());

        if(!review.getBoard().equals(board) || !review.getMember().equals(member)) {
            throw new Exception();
        }

        reviewRepository.delete(review);

    }


}
