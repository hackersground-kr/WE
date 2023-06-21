package HackerGround.WEIN.domain.member;


import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "MEMBER_ID")
    private Long id;

    private String userName;
    private String loginId;
    private String passWord;
    private Long birth;
    private boolean gender;

    @Builder
    public Member(String userName, String loginId, String passWord, Long birth) {
        this.userName = userName;
        this.loginId = loginId;
        this.passWord = passWord;
        this.birth = birth;
    }

    public Member update(Member member) {
        this.userName = member.getUserName();
        this.loginId = member.getLoginId();
        this.passWord=member.getPassWord();
        this.birth=member.getBirth();
        return this;
    }
}
