package HackerGround.WEIN.model.response;

import lombok.Data;

@Data
public class CommonResult {

    private boolean success;
    private int code;
    private String msg;

}
