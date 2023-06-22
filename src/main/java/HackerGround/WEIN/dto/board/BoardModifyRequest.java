package HackerGround.WEIN.dto.board;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class BoardModifyRequest {

    @NotBlank(message = "token is essential")
    private String token;

    private String boardTitle;
    private String description;
}
