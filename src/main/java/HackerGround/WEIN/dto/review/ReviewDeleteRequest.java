package HackerGround.WEIN.dto.review;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ReviewDeleteRequest {

    @NotBlank
    private String token;

    @NotBlank
    private Long boardId;
}
