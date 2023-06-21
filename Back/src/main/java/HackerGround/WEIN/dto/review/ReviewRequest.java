package HackerGround.WEIN.dto.review;

import HackerGround.WEIN.domain.comment.Review;
import HackerGround.WEIN.domain.member.Member;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ReviewRequest {
    private String title;
    private String description;
    private LocalDateTime createdTime;

    public Review to_Entity() {
        return Review.builder()
                .title(title)
                .description(description)
                .createdTime(LocalDateTime.now())
                .build();
    }

}
