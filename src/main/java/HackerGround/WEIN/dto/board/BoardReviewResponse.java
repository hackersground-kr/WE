package HackerGround.WEIN.dto.board;


import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.dto.review.ReviewResponse;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class BoardReviewResponse {


    private String boardTitle;
    private String description;
    private LocalDateTime createTime;
    private Integer viewCount;
    private Integer heartCount;

    private List<ReviewResponse> reviewList;

    public BoardReviewResponse(Board board, List<ReviewResponse> reviewList) {
        this.boardTitle = board.getBoardTitle();
        this.description = board.getDescription();
        this.createTime = board.getCreateTime();
        this.viewCount = board.getViewCount();
        this.heartCount = board.getHeartCount();
        this.reviewList=reviewList;
    }


}
