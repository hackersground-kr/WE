package HackerGround.WEIN.domain.user;


import HackerGround.WEIN.domain.board.Board;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

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

    @Nullable
    private boolean gender;

}
