package HackerGround.WEIN.dto.board;

import HackerGround.WEIN.domain.board.Board;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class BoardResponse {

    private String boardTitle;
    private String description;
    private LocalDateTime createTime;
    private Long viewCount;
    private Long heartCount;

    public BoardResponse(Board board) {
        this.boardTitle = board.getBoardTitle();
        this.description = board.getDescription();
        this.createTime = board.getCreateTime();
        this.viewCount = board.getViewCount();
        this.heartCount = board.getHeartCount();
    }

    public static BoardResponse toDto(Board board) {
        return new BoardResponse(board);
    }
}
