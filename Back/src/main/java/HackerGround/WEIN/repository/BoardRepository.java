package HackerGround.WEIN.repository;

import HackerGround.WEIN.domain.board.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<Board,Long> {

}
