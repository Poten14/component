"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "@components/Button/Button";

const ButtonDoc: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 500); // 0.5초 후에 상태를 초기화
  };

  return (
    <div className="prose max-w-[1000px] p-5 text-[#6D6D6D]">
      <h1 className="text-[#2D3748]">Button</h1>
      <p>
        <code>Button</code> 컴포넌트는 클릭 가능한 버튼을 생성하기 위해
        사용됩니다. 다양한 크기, 색상, 변형, 아이콘 및 기타 옵션을 통해 다양한
        스타일의 버튼을 구현할 수 있습니다.
      </p>

      <h2 className="text-[#2D3748]">Import</h2>
      <div className="relative">
        <CopyToClipboard
          text={`import { Button } from '@components/Button';`}
          onCopy={handleCopy}
        >
          <Button
            icon={copied ? "icon-check" : "icon-docs"}
            className="copyButton"
            size="small"
            iconColor={copied ? "green" : "white"}
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`import { Button } from '@components/Button';`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Usage</h2>
      <p>기본 사용 예제는 아래와 같습니다:</p>
      <div style={{ marginBottom: "20px" }}>
        <Button>Button</Button>
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import { Button } from '@components/Button';

function Example() {
  return (
    <Button>
      Button
    </Button>
  );
}

export default Example;`}
          onCopy={handleCopy}
        >
          <Button
            icon={copied ? "icon-check" : "icon-docs"}
            className="copyButton"
            iconColor={copied ? "green" : "white"}
            size="small"
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import { Button } from '@components/Button';

function Example() {
  return (
    <Button>
      Button
    </Button>
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h1 className="pt-2 text-[#2D3748]">Size</h1>
      <p>
        <code>size</code> prop을 이용하여 버튼의 크기를 설정할 수 있습니다.
        가능한 값은 <code>small</code>, <code>medium</code>,<code>large</code>{" "}
        입니다.
      </p>

      <div className="space-x-4 space-y-4">
        <Button size="small">Small Button</Button>
        <Button size="medium">Medium Button</Button>
        <Button size="large">Large Button</Button>
      </div>

      <div className="relative">
        <CopyToClipboard
          text={`import { Button } from '@components/Button';

function Example() {
  return (
      <>
        <Button size="small">Small Button</Button>
        <Button size="medium">Medium Button</Button>
        <Button size="large">Large Button</Button>
      </>
  );
}

export default Example;`}
          onCopy={handleCopy}
        >
          <Button
            icon={copied ? "icon-check" : "icon-docs"}
            className="copyButton"
            iconColor={copied ? "green" : "white"}
            size="small"
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import { Button } from '@components/Button';

function Example() {
  return (
      <>
        <Button size="small">Small Button</Button>
        <Button size="medium">Medium Button</Button>
        <Button size="large">Large Button</Button>
      </>
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h1 className="pt-2 text-[#2D3748]">Color</h1>

      <p>
        <code>color</code> prop을 이용하여 버튼의 색상을 설정할 수 있습니다.
        가능한 값은 <code>primary</code>, <code>secondary</code>,
        <code>success</code>,<code>warning</code>, <code>danger</code>,
        <code>red</code>,<code>orange</code>, <code>yellow</code>,
        <code>green</code>,<code>blue</code>, <code>purple</code>,
        <code>pink</code>, <code>basic</code> 입니다.
      </p>

      <div className="space-x-4 space-y-4">
        <Button>Primary Button</Button>
        <Button color="secondary">Secondary Button</Button>
        <Button color="success">Success Button</Button>
        <Button color="warning">Warning Button</Button>
        <Button color="danger">Danger Button</Button>
        <Button color="red">Red Button</Button>
        <Button color="orange">Orange Button</Button>
        <Button color="yellow">Yellow Button</Button>
        <Button color="green">Green Button</Button>
        <Button color="blue">Blue Button</Button>
        <Button color="purple">Purple Button</Button>
        <Button color="pink">Pink Button</Button>
        <Button color="basic">Basic Button</Button>
      </div>

      <div className="relative">
        <CopyToClipboard
          text={`import { Button } from '@components/Button';

function Example() {
  return (
        <>
        <Button color="primary">Primary Button</Button>
        <Button color="secondary">Secondary Button</Button>
        <Button color="success">Success Button</Button>
        <Button color="warning">Warning Button</Button>
        <Button color="danger">Danger Button</Button>
        <Button color="red">Red Button</Button>
        <Button color="orange">Orange Button</Button>
        <Button color="yellow">Yellow Button</Button>
        <Button color="green">Green Button</Button>
        <Button color="blue">Blue Button</Button>
        <Button color="purple">Purple Button</Button>
        <Button color="pink">Pink Button</Button>
        <Button color="basic">Basic Button</Button>
        </>
  );
}

export default Example;`}
          onCopy={handleCopy}
        >
          <Button
            icon={copied ? "icon-check" : "icon-docs"}
            className="copyButton"
            iconColor={copied ? "green" : "white"}
            size="small"
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import { Button } from '@components/Button';

function Example() {
  return (
        <>
        <Button color="primary">Primary Button</Button>
        <Button color="secondary">Secondary Button</Button>
        <Button color="success">Success Button</Button>
        <Button color="warning">Warning Button</Button>
        <Button color="danger">Danger Button</Button>
        <Button color="red">Red Button</Button>
        <Button color="orange">Orange Button</Button>
        <Button color="yellow">Yellow Button</Button>
        <Button color="green">Green Button</Button>
        <Button color="blue">Blue Button</Button>
        <Button color="purple">Purple Button</Button>
        <Button color="pink">Pink Button</Button>
        <Button color="basic">Basic Button</Button>
        </>
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h1 className="pt-2 text-[#2D3748]">Radius</h1>

      <p>
        <code>radius</code> prop을 이용하여 버튼의 모서리 둥근 정도를 설정할 수
        있습니다. 가능한 값은 <code>small</code>, <code>medium</code>,
        <code>large</code>,<code>none</code>, <code>full</code> 입니다.
      </p>

      <div className="space-x-4 space-y-4">
        <Button radius="small">Small Radius Button</Button>
        <Button radius="medium">Medium Radius Button</Button>
        <Button radius="large">Large Radius Button</Button>
        <Button radius="none">No Radius Button</Button>
        <Button radius="full">Full Radius Button</Button>
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import { Button } from '@components/Button';

function Example() {
  return (
      <>
        <Button radius="small">Radius Small Button</Button>
        <Button radius="medium">Radius MediumButton</Button>
        <Button radius="large">Radius Large Button</Button>
        <Button radius="full">Radius Full Button</Button>
        <Button radius="none">Radius None Button</Button>
      </>
  );
}

export default Example;`}
          onCopy={handleCopy}
        >
          <Button
            icon={copied ? "icon-check" : "icon-docs"}
            className="copyButton"
            iconColor={copied ? "green" : "white"}
            size="small"
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import { Button } from '@components/Button';

function Example() {
  return (
      <>
        <Button radius="small">Radius Small Button</Button>
        <Button radius="medium">Radius MediumButton</Button>
        <Button radius="large">Radius Large Button</Button>
        <Button radius="full">Radius Full Button</Button>
        <Button radius="none">Radius None Button</Button>
      </>
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>
      <h1 className="pt-2 text-[#2D3748]">Variant</h1>

      <p>
        <code>variant</code> prop을 이용하여 버튼의 스타일 변형을 설정할 수
        있습니다. 가능한 값은 <code>solid</code>, <code>border</code>,
        <code>flat</code>,<code>light</code> 입니다.
      </p>
      <div className="space-x-4 space-y-4">
        <Button variant="solid">Solid Button</Button>
        <Button variant="border">Border Button</Button>
        <Button variant="flat">Flat Button</Button>
        <Button variant="light">Light Button</Button>
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import { Button } from '@components/Button';

function Example() {
  return (
      <>
        <Button variant="solid">Solid Button</Button>
        <Button variant="border">Border Button</Button>
        <Button variant="flat">Flat Button</Button>
        <Button variant="light">Light Button</Button>
      </>
  );
}

export default Example;`}
          onCopy={handleCopy}
        >
          <Button
            icon={copied ? "icon-check" : "icon-docs"}
            className="copyButton"
            iconColor={copied ? "green" : "white"}
            size="small"
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import { Button } from '@components/Button';

function Example() {
  return (
      <>
        <Button variant="solid">Solid Button</Button>
        <Button variant="border">Border Button</Button>
        <Button variant="flat">Flat Button</Button>
        <Button variant="light">Light Button</Button>
      </>
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>
      <h1 className="pt-2 text-[#2D3748]">Icon</h1>

      <p>
        <code>icon</code> prop을 이용하여 버튼에 아이콘을 추가할 수 있습니다.
        <code>iconPosition</code> prop으로 아이콘의 위치를 설정할 수 있으며,
        <code>iconSize</code> prop으로 아이콘의 크기를 조절할 수 있습니다.
      </p>
      <p> Icon에 대한 자세한 정보는 Icon Docs를 참고 하시면 됩니다.</p>
      <div className="space-x-4 space-y-4">
        <Button icon="icon-home" iconPosition="left" iconSize="small">
          Left Small Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="left" iconSize="medium">
          Left Medium Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="left" iconSize="large">
          Left Large Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="right" iconSize="small">
          Right Small Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="right" iconSize="medium">
          Right Medium Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="right" iconSize="large">
          Right Large Icon Button
        </Button>
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import { Button } from '@components/Button';

function Example() {
  return (
      <>
          <Button icon="icon-home" iconPosition="left" iconSize="small">
          Left Small Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="left" iconSize="medium">
          Left Medium Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="left" iconSize="large">
          Left Large Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="right" iconSize="small">
          Right Small Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="right" iconSize="medium">
          Right Medium Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="right" iconSize="large">
          Right Large Icon Button
        </Button>
      </>
  );
}

export default Example;`}
          onCopy={handleCopy}
        >
          <Button
            icon={copied ? "icon-check" : "icon-docs"}
            className="copyButton"
            iconColor={copied ? "green" : "white"}
            size="small"
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import { Button } from '@components/Button';

function Example() {
  return (
      <>
          <Button icon="icon-home" iconPosition="left" iconSize="small">
          Left Small Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="left" iconSize="medium">
          Left Medium Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="left" iconSize="large">
          Left Large Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="right" iconSize="small">
          Right Small Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="right" iconSize="medium">
          Right Medium Icon Button
        </Button>
        <Button icon="icon-home" iconPosition="right" iconSize="large">
          Right Large Icon Button
        </Button>
      </>
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>
      <h1 className="pt-2 text-[#2D3748]">Disabled</h1>

      <p>
        <code>disabled</code> prop을 이용하여 버튼을 비활성화할 수 있습니다.
      </p>

      <div className="space-x-4 space-y-4">
        <Button disabled>Disabled Button</Button>
      </div>
      <div className="relative">
        <CopyToClipboard
          text={`import { Button } from '@components/Button';

function Example() {
  return (
            <Button disabled>Button Disabled</Button>
  );
}

export default Example;`}
          onCopy={handleCopy}
        >
          <Button
            icon={copied ? "icon-check" : "icon-docs"}
            className="copyButton"
            iconColor={copied ? "green" : "white"}
            size="small"
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import { Button } from '@components/Button';

function Example() {
  return (
          <Button disabled>Button Disabled</Button>
   );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h1 className="pt-2 text-[#2D3748]">ClassName</h1>

      <p>
        <code>className</code> prop을 사용하여 <code>Button</code> 컴포넌트의
        스타일을 커스터마이징할 수 있습니다. 아래는 버튼의 배경색과 텍스트
        색상을 커스터마이징한 예시입니다.
      </p>
      <p>
        아래 예시처럼 바로 적용이 가능한 부분도 있지만 CSS 우선순위에 의해서
        !important를 사용해야 적용되는 부분도 있을수 있습니다.
      </p>

      <div className="space-x-4 space-y-4">
        <Button
          variant="border"
          color="warning"
          radius="none"
          className="w-[500px] !bg-red-200 !text-blue-600"
        >
          ClassNameCustomButton
        </Button>
      </div>

      <div className="relative">
        <CopyToClipboard
          text={`import { Button } from '@components/Button';

function Example() {
  return (
        <Button
          variant="border"
          color="warning"
          radius="none"
          className="w-[500px] !bg-red-200 !text-blue-600"
        >
          ClassNameCustomButton
        </Button>
  );
}

export default Example;`}
          onCopy={handleCopy}
        >
          <Button
            icon={copied ? "icon-check" : "icon-docs"}
            className="copyButton"
            iconColor={copied ? "green" : "white"}
            size="small"
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import { Button } from '@components/Button';

function Example() {
  return (
        <Button
          variant="border"
          color="warning"
          radius="none"
          className="w-[500px] !bg-red-200 !text-blue-600"
        >
          ClassNameCustomButton
        </Button>
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>

      <h2 className="text-[#2D3748]">Full Example with Mixed Props</h2>

      <p>여러 속성을 섞어서 사용한 버튼 예제입니다.</p>

      <div className="space-x-4 space-y-4">
        <Button variant="border" color="purple" radius="full">
          Border Purple Full Button
        </Button>
        <Button variant="light" color="warning" radius="none">
          Light Warning None Button
        </Button>
        <Button
          variant="border"
          color="warning"
          radius="none"
          className="w-[500px] !bg-red-200 !text-blue-600"
        >
          ClassNameCustomButton
        </Button>
      </div>

      <div className="relative">
        <CopyToClipboard
          text={`import { Button } from '@components/Button';

function Example() {
  return (
    <div>
      <Button variant="border" color="purple" radius="full">
        Border Purple Full Button
      </Button>
      <Button variant="light" color="warning" radius="none">
        Light Warning None Button
      </Button>
      <Button
        variant="border"
        color="warning"
        radius="none"
        className="w-[500px] !bg-red-200 !text-blue-600"
      >
        ClassNameCustomButton
      </Button>
    </div>
  );
}

export default Example;`}
          onCopy={handleCopy}
        >
          <Button
            icon={copied ? "icon-check" : "icon-docs"}
            className="copyButton"
            size="small"
            iconColor={copied ? "green" : "white"}
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </CopyToClipboard>
        <SyntaxHighlighter language="tsx">
          {`
import { Button } from '@components/Button';

function Example() {
  return (
    <div>
      <Button variant="border" color="purple" radius="full">
        Border Purple Full Button
      </Button>
      <Button variant="light" color="warning" radius="none">
        Light Warning None Button
      </Button>
      <Button
        variant="border"
        color="warning"
        radius="none"
        className="w-[500px] !bg-red-200 !text-blue-600"
      >
        ClassNameCustomButton
      </Button>
    </div>
  );
}

export default Example;
`}
        </SyntaxHighlighter>
      </div>
      <h1 className="pt-2 text-[#2D3748]">Props</h1>

      <p>
        <code>Button</code> 컴포넌트는 아래와 같은 Props를 가집니다:
      </p>

      <table>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <code>size</code>
            </td>
            <td>Button의 크기를 설정합니다.</td>
            <td>
              <code>"small" | "medium" | "large"</code>
            </td>
            <td>
              <code>"medium"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>Button의 색상을 설정합니다.</td>
            <td>
              <code>
                "primary" | "secondary" | "success" | "warning" | "danger" |
                "red" | "orange" | "yellow" | "green" | "blue" | "purple" |
                "pink" | "basic"
              </code>
            </td>
            <td>
              <code>"basic"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>radius</code>
            </td>
            <td>Button의 모서리 둥근 정도를 설정합니다.</td>
            <td>
              <code>"small" | "medium" | "large" | "none" | "full"</code>
            </td>
            <td>
              <code>"medium"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>variant</code>
            </td>
            <td>Button의 변형 스타일을 설정합니다.</td>
            <td>
              <code>"solid" | "border" | "flat" | "light"</code>
            </td>
            <td>
              <code>"solid"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>icon</code>
            </td>

            <td>Button에 아이콘을 추가합니다.</td>
            <td>
              <code>IconName</code>
            </td>
            <td>
              <code>undefined</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>iconSize</code>
            </td>

            <td>아이콘의 크기를 설정합니다.</td>
            <td>
              <code>"small" | "medium" | "large"</code>
            </td>
            <td>
              <code>"medium"</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>iconPosition</code>
            </td>

            <td>아이콘의 위치를 설정합니다. (왼쪽 또는 오른쪽)</td>

            <td>
              <code>"left" | "right"</code>
            </td>

            <td>
              <code>"left"</code>
            </td>
          </tr>

          <tr>
            <td>
              <code>disabled</code>
            </td>

            <td>Button을 비활성화 상태로 만듭니다.</td>

            <td>
              <code>boolean</code>
            </td>

            <td>
              <code>false</code>
            </td>
          </tr>

          <tr>
            <td>
              <code>onClick</code>
            </td>

            <td>Button이 클릭될 때 호출되는 핸들러입니다.</td>

            <td>
              <code>() =&gt; void</code>
            </td>

            <td>
              <code>undefined</code>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ButtonDoc;
