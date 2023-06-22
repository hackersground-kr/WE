package HackerGround.WEIN.dto.member;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class MemberDeleteRequest {

    @NotBlank(message = "token is essential")
    private String token;
}
