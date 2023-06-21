package HackerGround.WEIN.domain.model.response;

import lombok.Getter;

@Getter
public class SingleResult<T> extends CommonResult {
    private T data;
}
