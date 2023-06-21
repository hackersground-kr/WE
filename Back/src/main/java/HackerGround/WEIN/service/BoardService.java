package HackerGround.WEIN.service;

import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.repository.BoardRepository;
import jakarta.transaction.Transactional;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

}
