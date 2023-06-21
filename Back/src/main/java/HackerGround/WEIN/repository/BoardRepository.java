package HackerGround.WEIN.repository;

import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.domain.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BoardRepository extends JpaRepository<Board,Long> {

    Board findBoardById(Long id);

    void deleteAllByMember(Optional<Member> member);
}
