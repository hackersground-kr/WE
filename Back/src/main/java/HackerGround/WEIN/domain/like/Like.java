package HackerGround.WEIN.domain.like;

import HackerGround.WEIN.domain.board.Board;
import HackerGround.WEIN.domain.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Like {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    private Board board;

//    foreign key
    private Long boardId;
    private Long userId;

    private Long count;
}
