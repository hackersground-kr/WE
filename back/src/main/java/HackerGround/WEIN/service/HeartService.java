package HackerGround.WEIN.service;

import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.domain.heart.Heart;
import HackerGround.WEIN.domain.member.Member;
import HackerGround.WEIN.dto.heart.HeartRequest;
import HackerGround.WEIN.repository.BoardRepository;
import HackerGround.WEIN.repository.HeartRepository;
import HackerGround.WEIN.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class HeartService {

    private final HeartRepository heartRepository;
    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;

    public void clickHeart(Long id,HeartRequest request) throws Exception {
        Board board = boardRepository.findBoardById(id);
        Member member = memberRepository.findMemberByToken(request.getToken());

        if(heartRepository.findByMemberAndBoard(member,board)) {
            throw new Exception();
        }

        Heart heart=Heart.builder()
                .member(member)
                .board(board)
                .build();

        heartRepository.save(heart);
        board.updateHeartCount();
    }
}
