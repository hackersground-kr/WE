package HackerGround.WEIN.dto.review;

import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.domain.comment.Review;
import HackerGround.WEIN.domain.member.Member;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Data
@Setter
@Getter
public class ReviewRequest {

    @NotBlank
    private String token;

    @NotNull
    private Long boardId;

    @NotBlank
    private String title;

    @NotBlank
    private String description;

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
