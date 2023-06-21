package HackerGround.WEIN.model.response;

import lombok.Getter;

@Getter
public class SingleResult<T> extends CommonResult {
    private T data;
}
