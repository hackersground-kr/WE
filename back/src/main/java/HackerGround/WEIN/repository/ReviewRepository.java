package HackerGround.WEIN.repository;

import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.domain.comment.Review;
import HackerGround.WEIN.domain.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    void deleteAllByBoard(Board board);
    List<Review> findReviewsByMemberAndBoard(Member member, Board board);

}
