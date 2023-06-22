package HackerGround.WEIN.dto.review;

import HackerGround.WEIN.domain.comment.Review;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ReviewResponse {

    private String title;

    private String userName;
    private String description;
    private LocalDateTime createdTime;

    public ReviewResponse(Review review) {
        this.title = review.getTitle();
        this.userName=review.getMember().getUserName();
        this.description = review.getDescription();
        this.createdTime = review.getCreatedTime();
    }

    public static ReviewResponse toDto(Review review) {
        return new ReviewResponse(review);
    }
}
