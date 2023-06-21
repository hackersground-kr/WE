package HackerGround.WEIN.dto.review;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ReviewDeleteRequest {

    private String token;
    private Long boardId;
}
