package HackerGround.WEIN.dto.review;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ReviewModifyRequest {

    @NotBlank
    private String token;

    @NotBlank
    private Long boardId;

    @NotBlank
    private String title;

    @NotBlank
    private String description;

}
