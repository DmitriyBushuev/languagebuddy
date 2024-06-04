import { AppRoot, FixedLayout, Tabbar, Text } from '@telegram-apps/telegram-ui';
import React, { useState } from 'react';

export default function IndexPage() {
  const [currentTab, setCurrentTab] = useState("0");

  return (
    <FixedLayout>
      <FixedLayout vertical="top" style={{ display: currentTab == "1" ? 'none' : 'inherit' }}>
        <Text>Test</Text>
      </FixedLayout>
      <Tabbar>

        <Tabbar.Item key={1} text='Home' selected={"0" === currentTab} onClick={() => setCurrentTab("0")}>

        </Tabbar.Item>
        <Tabbar.Item key={2} text='Library' selected={"1" === currentTab} onClick={() => setCurrentTab("1")}>

        </Tabbar.Item>
      </Tabbar>
    </FixedLayout>
  );
};
