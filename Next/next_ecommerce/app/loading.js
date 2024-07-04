// app/product/[id]/loading.js
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const Loading = () => {
  return(<>

   <SkeletonTheme  highlightColor="#444">
  <p>
    <Skeleton count={3} />
  </p>
</SkeletonTheme>
</>
  )
};

export default Loading;
