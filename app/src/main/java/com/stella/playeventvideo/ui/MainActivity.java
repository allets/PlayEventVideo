package com.stella.playeventvideo.ui;


import android.os.Bundle;
import android.support.annotation.Nullable;

import com.stella.playeventvideo.R;

public class MainActivity extends BasicActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        logger.debug("onCreate");// test log

    }
}
