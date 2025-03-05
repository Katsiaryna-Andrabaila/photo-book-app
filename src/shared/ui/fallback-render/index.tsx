export const FallbackRender = ({ error }: { error: { message: string }}) => (
    <div className="w-screen mx-4 text-center text-gray-700 text-2xl">
        Something went wrong:
        <pre className="mt-2 text-red-500">{error.message}</pre>
    </div>
);
