package HackerGround.WEIN.dto.member;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class MemberModifyRequest {

    @NotBlank
    private String token;

    @NotBlank
    private String userName;

    @NotBlank
    private String loginId;

    @NotBlank
    private String password;

    private Integer birth;
}
