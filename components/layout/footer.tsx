export default function Footer() {
  return (
    <div className="absolute w-full py-5 text-center">
      <p className="text-gray-500">
        SafeSpace - Mental Wellness Social Platform
      </p>
      <p className="mt-2 text-sm text-gray-400">
        EISS © {new Date().getFullYear()}
      </p>
    </div>
  );
}
