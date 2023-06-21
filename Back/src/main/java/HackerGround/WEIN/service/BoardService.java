package HackerGround.WEIN.service;

import HackerGround.WEIN.dto.board.BoardModifyRequest;
import HackerGround.WEIN.dto.board.BoardRequest;
import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.domain.member.Member;
import HackerGround.WEIN.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

import static lombok.Lombok.checkNotNull;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    public Board register(Member member, BoardRequest boardRequest) {
        Board board = boardRequest.to_Entity(member);
        return boardRepository.save(board);
    }

    public Board modify(Long id, BoardModifyRequest boardModifyRequest) {
        Board boardById = boardRepository.findBoardById(id);
        return boardById.modify(boardModifyRequest);
    }

    public void delete(Long id) {
        Board board = boardRepository.findBoardById(id);
        boardRepository.delete(board);

    }

    public void add_HeartCount(Long id) {
        Board boardById = boardRepository.findBoardById(id);
        boardById.updateHeartCount();
    }

    public Board findById(Long id) throws Exception {
        checkNotNull(id,"board");
        return boardRepository.findById(id).orElseThrow(() -> new Exception("Could not found"));
    }

    public List<Board> findAll() {
        return boardRepository.findAll();
    }

    public void DeleteByMember(Member member) {
        boardRepository.deleteAllByMember(member);
    }

}
