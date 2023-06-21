package HackerGround.WEIN.dto.member;

import lombok.Data;

@Data
public class MemberModifyRequest {

    private String token;
    private String userName;
    private String loginId;
    private String password;
    private Long birth;
}
