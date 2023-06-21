package HackerGround.WEIN.api.dto.board;

import lombok.Data;

@Data
public class BoardModifyRequest {

    private String boardTitle;
    private String description;
}
