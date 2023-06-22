package HackerGround.WEIN.dto.heart;


import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class HeartRequest {

    @NotBlank
    private String token;
}
