import { Suspense } from 'react';

import { GithubProfile } from './components/github-profile';
import { LongWaitComponent } from './components/long-wait-component';

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <h1>Home</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut natus
        quo suscipit quae totam! Porro, ipsam, perspiciatis dicta accusamus odit
        ullam architecto dolores ducimus at quibusdam consequuntur, inventore
        officiis?
      </p>

      <Suspense fallback={<p>Carregando LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Carregando GithubProfile</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  );
}
