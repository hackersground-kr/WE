package HackerGround.WEIN.model.response;

import lombok.Getter;

import java.util.List;

@Getter
public class ListResult<T> extends CommonResult {

    private List<T> list;
}