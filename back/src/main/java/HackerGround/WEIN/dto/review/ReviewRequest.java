package HackerGround.WEIN.dto.review;

import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.domain.comment.Review;
import HackerGround.WEIN.domain.member.Member;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Data
@Setter
@Getter
public class ReviewRequest {

    private Long boardId;
    private String memberToken;

    private String title;
    private String description;
    private LocalDateTime createdTime;

    public Review to_Entity(Member member,Board board) {
        return Review.builder()
                .board(board)
                .member(member)
                .title(title)
                .description(description)
                .createdTime(LocalDateTime.now())
                .build();
    }

}
