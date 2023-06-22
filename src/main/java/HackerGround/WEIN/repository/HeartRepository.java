package HackerGround.WEIN.repository;


import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.domain.heart.Heart;
import HackerGround.WEIN.domain.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HeartRepository extends JpaRepository<Heart,Long> {

    boolean findByMemberAndBoard(Member member, Board board);
    void deleteByMember(Member member);
}
