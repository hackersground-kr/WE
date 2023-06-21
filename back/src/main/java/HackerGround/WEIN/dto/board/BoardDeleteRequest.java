package HackerGround.WEIN.dto.board;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class BoardDeleteRequest {


    @NotBlank
    private String token;


}
