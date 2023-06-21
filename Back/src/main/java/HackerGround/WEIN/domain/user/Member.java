package HackerGround.WEIN.domain.user;


import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.domain.like.Like;
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
    private Long id;

    @OneToMany(mappedBy = "member")
    private List<Board> board=new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Like> likes=new ArrayList<>();


    private String userName;
    private String loginId;
    private String passWord;
    private Long birth;

    @Nullable
    private boolean gender;

}
