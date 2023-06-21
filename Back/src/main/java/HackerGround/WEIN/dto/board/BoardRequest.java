package HackerGround.WEIN.dto.board;

import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.domain.member.Member;

public class BoardRequest {


    private String boardTitle;
    private String description;

    public Board to_Entity(Member member) {
        return new Board(member,this.boardTitle,this.description);
    }


}
