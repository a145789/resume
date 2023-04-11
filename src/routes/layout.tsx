import { Outlet } from '@modern-js/runtime/router';
// import useIsSsr from '@/hooks/useIsSsr';

export default function Layout() {
  // const isSsr = useIsSsr();
  // if (isSsr) {
  //   return null;
  // }
  return <Outlet />;
}
