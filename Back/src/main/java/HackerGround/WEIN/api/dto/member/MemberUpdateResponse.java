package HackerGround.WEIN.api.dto.member;

import lombok.Data;

@Data
public class MemberUpdateResponse {

    private String userName;
    private String loginId;
    private String password;
    private Long birth;
}
