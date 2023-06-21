package HackerGround.WEIN.dto.review;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ReviewModifyRequest {

    private String title;
    private String description;
    private LocalDateTime createdTime;
}
