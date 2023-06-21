package HackerGround.WEIN.service;

import HackerGround.WEIN.api.dto.heart.HeartRequest;
import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.domain.heart.Heart;
import HackerGround.WEIN.domain.member.Member;
import HackerGround.WEIN.repository.BoardRepository;
import HackerGround.WEIN.repository.HeartRepository;
import HackerGround.WEIN.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class HeartService {

    private final HeartRepository heartRepository;
    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;

    public void clickHeart(Long memberId,Long boardId) throws Exception {
        Board findBoard = boardRepository.findBoardById(boardId);
        Member findMember = memberRepository.findMemberById(memberId);

        if(heartRepository.findByMemberAndBoard(findMember,findBoard)) {
            throw new Exception();
        }

        Heart heart=Heart.builder()
                .board(findBoard)
                .member(findMember)
                .build();

        heartRepository.save(heart);
        findBoard.updateHeartCount();
    }
}
